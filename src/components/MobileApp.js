export default function MobileApp(){
    return(
        <div className="flex md:flex-row flex-col justify-between items-center bg-primary-brand-color bg-mobile-app mt-7 rounded-lg text-white">
            <div className="flex flex-col gap-y-3 p-10 text-center md:text-left">
                <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
                <p className="font-semibold">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
                <nav className="mt-5 flex gap-2 lg:flex-nowrap flex-wrap justify-center">
                    <a href="#" className="transition-all transform hover:scale-105"><img className="md:h-8 lg:h-auto" src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                    <a href="#" className="transition-all transform hover:scale-105"><img className="md:h-8 lg:h-auto" src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                    <a href="#" className="transition-all transform hover:scale-105"><img className="md:h-8 lg:h-auto" src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
                </nav>
            </div>
            <picture className="pt-6 hidden md:block md:self-end">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" alt="" />
            </picture>
        </div>
    )
}