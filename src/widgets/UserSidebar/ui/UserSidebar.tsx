import CardSidebar from "@/widgets/cardSidebar";
const UserSidebar = () => {
    return (
        <div className="col userSidebar rounded-end-5 p-3">
            <span className=" fs-4 text-light ">ваши изображения</span>

            <div className="row align-items-center justify-content-center gap-2 p-2">
                <CardSidebar/>
                <CardSidebar/>
                <CardSidebar/>
                <CardSidebar/>

            </div>
        </div>

    );
};

export default UserSidebar;