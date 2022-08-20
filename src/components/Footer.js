import Menu from "./ui/Menu"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import { BiGlobe } from 'react-icons/bi'
 
export default function Footer(){
    
    const menus = [
        {
            title: "Getir'i Keşfedin",
            items: [
                {
                title: "Hakkımızda",
                },
                {
                title: "Kariyer",
                },
                {
                title: "İletişim",
                },
                {
                title: "COVID-19",
                },
                {
                title: "Sosyal Sorumluluk Projeleri",
                }
            ]
        },
        {
            title: "Yardıma mı ihtiyacınız var?",
            items: [
                {
                title: "Sıkça Sorulan Sorular",
                },
                {
                title: "Kişisel Verilerin Korunması",
                },
                {
                title: "Gizlilik Politikası",
                },
                {
                title: "Kullanım Koşulları",
                },
                {
                title: "Çerez Politikası",
                }
            ]
        },
        {
            title: "İş Ortağımız Olun",
            items: [
                {
                title: "Bayimiz Olun",
                },
                {
                title: "Deponuzu Kiralayın",
                },
                {
                title: "GetirYemek Restoranı Olun",
                },
                {
                title: "Getir Çarşı İşletmesi Olun",
                }
            ]
        }

    ]
    
    return(
        <div className="bg-white mt-10">
            <div className="container mx-auto px-4 md:p-0">
                <div className="grid  md:grid-cols-2 lg:grid-cols-4 pt-5 gap-y-6 md:pt-10">
                    <section>
                    <h6 className="text-lg text-primary-brand-color mb-4">Getir'i İndirin!</h6>
                        <nav className="grid gap-2 md:gap-y-4 grid-cols-2 md:grid-cols-1">
                            <a href="#" className="transition-all transform hover:scale-105"><img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" alt="" /></a>
                            <a href="#" className="transition-all transform hover:scale-105"><img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" alt="" /></a>
                            <a href="#" className="transition-all transform hover:scale-105"><img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" alt="" /></a>
                        </nav> 
                    </section>
                    {menus.map((menu, index) =>
                        <Menu key={index} {...menu} />
                    )}
                </div>
                <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-100 mt-6 py-6">
                    <div className="text-[13px] text-gray-700 flex gap-x-8">
                        &copy; 2022 Getir 
                        <div className="-mx-5">&bull;</div>
                        <a href="#" className="text-primary-brand-color hover:underline text-[13px]">
                           Bilgi Toplumu Hizmetleri
                        </a>
                    </div>
                    <nav className="flex gap-x-3">
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center">
                            <FaFacebook size={21}/>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center">
                            <FaInstagram size={21}/>
                        </a>
                        <a href="#" className="w-8 h-8 rounded-lg text-gray-500 transition-colors hover:bg-primary-brand-color hover:text-primary-brand-color hover:bg-opacity-10 flex items-center justify-center">
                            <FaTwitter size={21}/>
                        </a>
                        <a href="#" className="h-8 px-2 transition-colors hover:bg-primary-brand-color hover:bg-opacity-20 flex items-center border border-gray-100 text-sm gap-x-2 rounded text-gray-500 hover:text-primary-brand-color">
                            <BiGlobe size={21}/>Türkçe (TR)
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}