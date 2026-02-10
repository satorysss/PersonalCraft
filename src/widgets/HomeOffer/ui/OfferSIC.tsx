import {offerImages} from "@/shared/ui/images/images";


export default function Offer() {
    return (
        <div className="container">
            <div className="row">
                <div className=" mt-5 text-white text-center">
                    <div>
                        <h2>Custom art generation</h2>
                        <p>Unleash the artist within You!</p>
                        <button className="getbutton3"><span>Start creating</span></button>
                    </div>

                </div>
            </div>
            <div className="row ">

                <div className="col">
                    <div className="row mt-5 mt-2 text-start">
                        <div className="col">
                        <img src={offerImages.img1} alt="" className=" offerrImg" />
                        </div>
                        <div className="col text-end">
                            <img src={offerImages.img3} alt="" className=" offerrImg" />
                        </div>
                    </div>
                    <div className="row mt-2 text-center">
                        <div className="col ">
                        <img src={offerImages.prewOne} alt="" width="80%" className=" rounded-5" />
                        </div>
                    </div>

                </div>

                <div className="col text-center mt-5">
                    <div className="col">
                        <img src={offerImages.prewTwo} alt="" className=" rounded-5" width="80%" />
                    </div>
                    <div className="col mt-4">
                        <div className="row">
                            <div className="col">
                                <img src={offerImages.img5} alt="" width="80%" />
                            </div>
                            <div className="col">
                                <img src={offerImages.img6} alt="" width="80%"/>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}
