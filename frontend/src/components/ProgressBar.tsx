import React from "react";

interface ProgressBarProps {
    progress: number; // 0 to 100
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
    return (
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
