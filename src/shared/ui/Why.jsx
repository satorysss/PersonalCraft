import { icons } from "@/shared/images/images";
export default function Whychoose() {
    return (
        <div className="block text-white mt-5">
            <div className="container">
                <div className="row p-5">
                    <div className="col text-center">
                        <h2>Why Choose NeonArtistry?</h2>
                    </div>
                </div>
                <div className="row justify-content-center text-center p-5">
                    {icons.map(icon => (
                        <div key={icon.id} className="col-md-3 text-center justify-content-end">
                            <img src={icon.src} alt={icon.alt} width={icon.width}  />
                            <h3 className="">Generate Unique Images</h3>
                            <p>Bring your bizarre ideas to life with our AI wizardry, and watch your imagination soar!</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}
