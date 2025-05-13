import { FaStar } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

const Trusted = () => {
    const trustedData = [
        {
            name: "Pither guy",
            user: "@pitherguy",
            text: "The hosting service we use is incredibly reliable, with consistently stable uptime. The technical support team is quick to respond, keeping our website running smoothly without any issues.",
        },
        {
            name: "Guy Mccoy",
            user: "@guymeccoy",
            text: "The VPS we are using has truly made our website much faster and more responsive. Technical support is extremely helpful, especially when urgent problems arise.",
        },
        {
            name: "Jhon Doe",
            user: "@jhondoe",
            text: "The dedicated server provided by this company delivers optimal performance for our projects. Their support team is always ready to assist, making us feel secure and comfortable working",
        },
    ];
    
    return (
        <div className="font-poppins flex flex-col items-center justify-center mt-20 p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Trusted by 10,000+ users worldwide</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {trustedData.map((data, index) => (
                    <div key={index} className="md:w-80 w-full p-6 bg-white shadow-lg rounded-lg flex flex-col">
                        <div className="flex items-center mb-4">
                            <FaUserCircle className="text-4xl mr-2" />
                            <div>
                                <h1 className="text-sm font-medium">{data.name}</h1>
                                <h2 className="text-gray-500 text-sm">{data.user}</h2>
                            </div>
                        </div>
                        <p className="mb-4 text-gray-600">{data.text}</p>
                        <div className="mt-auto flex space-x-1 text-3xl items-center justify-center text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                ))}
            </div>
            <button className="bg-blue-950 text-sm py-2 md:px-16 px-8 rounded-lg mt-10 text-white md:text-2xl">See other customer testimonials</button>
        </div>
    );
};

export default Trusted;
