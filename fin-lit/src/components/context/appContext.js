import axios from "axios";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { OPEN_AI_URL, YT_API_URL, YT_WATCH_URL } from "../API";
import { Link } from "react-router-dom";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppcontext must be within appContextProvider!');
    }
    return context;
};

const AppContextProvider = ({ children, searchTerm }) => {
    const [videos, setVideos] = useState([]);
    const [userInput, setUserInput] = useState("");
    const [chatbotResponse, setChatbotResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    console.log("Current searchTerm:", searchTerm);

    // Fetch video list on component mount or when searchTerm changes
    useEffect(() => {
        const fetchVideos = async () => {
            if (!searchTerm) {
                console.error("Search term is undefined");
                return;
            }

            try {
                console.log('YT_API_KEY:', process.env.REACT_APP_YT_API_KEY);
                const response = await axios.get(`${YT_API_URL}&q=${encodeURIComponent(searchTerm)}&part=snippet&type=video&maxResults=16`);
                console.log("API response", response.data);
                setVideos(response.data.items);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, [searchTerm]);

    // Chatbot function
    const handleChatbot = async () => {
        setIsLoading(true);
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/chat/completions",
                {
                    model: "gpt-3.5-turbo-0125",
                    messages: [
                        {
                            role: "system",
                            content: "You are a financial assistant that answers financial literacy questions and provides helpful resources."
                        },
                        {
                            role: "user",
                            content: userInput
                        }
                    ]
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${OPEN_AI_URL}`,
                    },
                }
            );
            const chatbotMessage = response.data.choices[0].message.content;
            console.log(chatbotMessage);
            setChatbotResponse(chatbotMessage);
        } catch (error) {
            console.error("Error fetching chatbot response:", error);
            setChatbotResponse("Sorry, I couldn't fetch the response. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AppContext.Provider value={{ 
            videos,
            userInput,
            setUserInput,
            chatbotResponse,
            handleChatbot,
            isLoading
        }}>
            {children}
        </AppContext.Provider>
    );
};

const VideoList = () => {
    const { videos } = useAppContext([]); // Access videos from context

    return (
        <div className="video-list">
            {videos.map((video, index) => (
                <div className="video" key={index}>
                    <div className="video-item title">
                        <h2>{video.snippet?.title}</h2> {/* Accessing video title */}
                    </div>
                    <Link to={`${YT_WATCH_URL}${video.id.videoId}`}>
                        <div className="video-item thumbnail">
                            <img src={video.snippet?.thumbnails.medium.url} alt="thumbnail" />
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export { AppContextProvider, VideoList };
