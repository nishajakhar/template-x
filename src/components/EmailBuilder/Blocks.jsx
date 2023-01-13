import './EmailBuilder.scss';

export default function Blocks() {
    return (
        <div className="blocks">
            <h1>Blank</h1>
            <div className="left">
                <div className="item item-1">
                    <div className="w-full "></div>
                </div>
                <div className="item item-2 ">
                    <div className="w-1/2 "></div>
                    <div className="w-1/2 "></div>
                </div>
                <div className="item item-3">
                    <div className="w-1/3"></div>
                    <div className="w-1/3"></div>
                    <div className="w-1/3"></div>
                </div>
                <div className="item item-4">
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>
                    <div className="flex-1"></div>
                </div>
            </div>
            <div className="right">
                <div className="item item-5">
                    <div className="w-1/3"></div>
                    <div className="w-2/3"></div>
                </div>
                <div className="item item-6">
                    <div className="w-2/3"></div>
                    <div className="w-1/3"></div>
                </div>
                <div className="item item-7">
                    <div className="w-1/6"></div>
                    <div className="w-2/6"></div>
                    <div className="w-1/6"></div>
                    <div className="w-2/6"></div>
                </div>
                <div className="item item-8">
                    <div className="w-2/6"></div>
                    <div className="w-1/6"></div>
                    <div className="w-2/6"></div>
                    <div className="w-1/6"></div>
                </div>
            </div>
        </div>
    );
}
