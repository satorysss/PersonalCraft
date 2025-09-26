import {offerImages} from "@/shared/images/images";


export default function Offer() {
    return (
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div className="row mt-5 text-white text-center">
                        <div>
                        <h2>Custom art generation</h2>
                        <p>Unleash the artist within You!</p>
                        <button className="getbutton3">Start creating</button>
                        </div>

                    </div>
                    <div className="row mt-5 mt-2 text-start">
                        <div className="col">
                        <img src={offerImages.img3} alt="" className=" offerrImg" />
                        </div>
                    </div>
                    <div className="row mt-2 text-center">
                        <div className="col ">
                        <img src={offerImages.img2} alt="" className="offerrImg" />
                        </div>
                    </div>
                    <div className="row mt-2 text-end">
                        <div className="col ">
                        <img src={offerImages.img1} alt="" className="offerrImg" />
                        </div>
                    </div>
                </div>

                <div className="col text-center mt-5">
                    <div className="col">
                        <img src={offerImages.imageBig} alt="" className="" width='450'/>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={offerImages.img5} alt="" />
                            </div>
                            <div className="col">
                                <img src={offerImages.img6} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <div className="col">
                                <img src={offerImages.img2} alt="" />
                            </div>
                            <div className="col">
                                <img src={offerImages.img3} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
