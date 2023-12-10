import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src = {icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-seminold leading-[23px] text-[18px] text-white mb-1'>{title}</h4>
      <p className='font-poppins font-normal leading-[23px] text-[16px] text-dimWhite mb-1'>{content}</p>
    </div>
  </div>
)


const Business = () => (
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>You do the bussiness, <br className='sm:block hidden'/> we'll handle the money.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

      <Button styles = {"mt-10 rounded-[10px] before:ease relative overflow-hidden transition-all before:absolute before:right-0 before:top-[-10px] before:h-[200px] before:w-10 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-30 before:duration-700 hover:before:-translate-x-40"}/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard 
          key = {feature.id}
          {...feature}
          index = {index}
        />
      ))}
    </div>
  </section>
)


export default Business