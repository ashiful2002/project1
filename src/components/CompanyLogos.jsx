import { companyLogos } from "../Constants"

const CompanyLogos = ({ className }) => {
    return (
        <>
            <div className={className}>
                <h5 className="tagLine mb-6 text-center text-n-1/50 ">Helping people beautiful conaent at </h5>
                <ul className="flex">
                    {
                        companyLogos.map((item, index) => {
                            return <li key={index} className="flex items-center justify-center flex-1 h-[8.5rem] ">
                                <img src={item} width={134} height={28} alt="item" />
                            </li>
                        })
                    }

                </ul>
            </div>
        </>
    )
}

export default CompanyLogos
