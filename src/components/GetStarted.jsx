import styles from "../style";
import { arrowUp } from "../assets";

const GetStarted = () => {

  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-0 before:h-[140px] before:w-10 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:before:-translate-x-40`}>

      <div className={`${styles.flexCenter} flex-col w-full h-full rounded-full bg-primary transition-colors`}>

        <div className={`${styles.flexCenter} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
            <span className="text-gradient">Get</span>
          </p>
          <img src={arrowUp} alt="arrUp" className="w-[23px] h-[23px] object-contain" />
        </div>

        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Started</span>
        </p>

      </div>

    </div >
  )
}


export default GetStarted