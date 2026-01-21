import { TfiNewWindow } from "react-icons/tfi";

export default function Footer() {
    return (
        <footer className="bg-gray-200 p-4 pb-8 text-sm font-medium text-gray-800">
            <div className="max-w-lg mx-auto flex flex-col">
                <p className="self-center">
                    Devin Duncan for Student Body President
                </p>
                <div className="flex items-center gap-4 mx-auto self-center mt-3">
                    <a href="https://www.instagram.com/devinforsbp" className="flex items-center hover:underline gap-1" target="_blank" rel="noopener noreferrer">
                        <span className="font-semibold">
                            Instagram
                        </span>
                        <TfiNewWindow size={12}/>
                    </a>
                    <div className="flex items-center">
                        <span>This website is&nbsp;</span>
                        <a href="https://github.com/bennetthilberg/devin-sbp" className="flex items-center hover:underline gap-1" target="_blank" rel="noopener noreferrer">
                            <span className="font-semibold">
                                open source
                            </span>
                            <TfiNewWindow size={12}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}