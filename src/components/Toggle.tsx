import React from 'react';
import { useTheme } from '@/context/ThemeContext';

export const Switch = () => {
    const switchId = React.useId();
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="flex items-center justify-center">
            <label htmlFor={switchId} className="relative w-12 h-12 rounded-full bg-white border-2 border-blue-300 dark:border-blue-500 grid place-items-center cursor-pointer overflow-hidden">
                <input
                    type="checkbox"
                    id={switchId}
                    className="peer hidden"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                />

                <div className="absolute transition-all duration-500 peer-checked:-rotate-90 peer-checked:scale-0 flex items-center justify-center inset-0">
                    {/* Moon Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24" width={32} height={32}>
                        <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </svg>
                </div>

                <div className="absolute transition-all duration-500 scale-0 rotate-90 peer-checked:rotate-0 peer-checked:scale-100 flex items-center justify-center inset-0">
                    {/* Sun Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#1e40af" viewBox="0 0 24 24" width={32} height={32}>
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
                    </svg>
                </div>
            </label>
        </div>
    );
};


