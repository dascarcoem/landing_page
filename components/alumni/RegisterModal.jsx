const { Popover, PopoverTrigger, PopoverContent } = require("@radix-ui/react-popover");
const { Label } = require("@radix-ui/react-select");

export const RegisterModal = () => {
    return (
        <div className="border text-black mx-auto p-2 mb-3 rounded-sm bg-[#40E0D0] hover:bg-[#33b3a6]">
            <Popover >
                <PopoverTrigger asChild>
                    <div variant="outline" className="cursor-pointer">Register as Alumni</div>
                </PopoverTrigger>
                <PopoverContent className="w-84 relative p-10 rounded-sm bg-gray-900 border border-[#40E0D0]/20 text-white">
                    <div className="grid gap-y-10 gap-x-4">
                        <div className="space-y-2">
                            <h4 className="font-semibold pb-4 text-2xl leading-none text-[#40E0D0]">Alumni Registration</h4>
                        </div>
                        <div className="grid gap-2">
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="width">Width</label>
                                <input
                                    id="width"
                                    defaultValue="100%"
                                    className="col-span-2 bg-[#1f2937] border border-[#40E0D0]/20 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="maxWidth">Max. width</label>
                                <input
                                    id="maxWidth"
                                    defaultValue="300px"
                                    className="col-span-2 bg-[#1f2937] border border-[#40E0D0]/20 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="height">Height</label>
                                <input
                                    id="height"
                                    defaultValue="25px"
                                    className="col-span-2 bg-[#1f2937] border border-[#40E0D0]/20 h-8"
                                />
                            </div>
                            <div className="grid grid-cols-3 items-center gap-4">
                                <label htmlFor="maxHeight">Max. height</label>
                                <input
                                    id="maxHeight"
                                    defaultValue="none"
                                    className="col-span-2 bg-[#1f2937] border border-[#40E0D0]/20 h-8"
                                />
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}