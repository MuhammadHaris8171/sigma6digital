import styles from '../styles/BelieveIn.module.css'

interface TranslationItem {
  title: string;
  description: string;
}

interface BelieveInProps {
  language: "en" | "ar"; // Define the expected language values
}

function BelieveIn({ language }: BelieveInProps) {
    const translations = {
        en: {
          heading: "What We Stand For and Believe In.",
          values: [
            { title: "Innovating for You", description: "We’re passionate about using the latest tech to create solutions that genuinely help businesses grow and succeed." },
            { title: "You Come First", description: "We see our clients as partners. Your needs guide us, and we’re here to listen, collaborate, and bring your ideas to life." },
            { title: "Quality, Always", description: "Whether it’s building a website, developing an app, offering IT support, or creating AI solutions, we never compromise on quality." },
            { title: "Honesty Matters", description: "We believe in clear, open communication. You’ll always know what’s happening and why, so there are no surprises." },
            { title: "Never Stop Learning", description: "Tech is always changing, and so are we. We keep learning so we can bring you solutions that are not just good for today but ready for tomorrow." },
            { title: "Helping You Grow", description: "We’re not just about fixing problems—we’re about creating opportunities. We want to help your business reach its next big milestone." },
          ],
        },
        ar: {
          heading: "ما نؤمن به ونلتزم به.",
          values: [
            { title: "الابتكار من أجلك", description: "نحن شغوفون باستخدام أحدث التقنيات لإنشاء حلول تساعد الشركات على النمو والنجاح." },
            { title: "أنت في المقام الأول", description: "نرى عملاءنا كشركاء. احتياجاتك توجهنا، ونحن هنا للاستماع والتعاون وتحقيق أفكارك." },
            { title: "الجودة دائمًا", description: "سواء كان الأمر يتعلق بإنشاء موقع ويب أو تطوير تطبيق أو تقديم دعم تقني، فإننا لا نساوم أبدًا على الجودة." },
            { title: "الصدق مهم", description: "نؤمن بالتواصل الواضح والصريح. ستعرف دائمًا ما يحدث ولماذا، حتى لا تكون هناك مفاجآت." },
            { title: "لا نتوقف عن التعلم", description: "التكنولوجيا تتطور باستمرار، وكذلك نحن. نستمر في التعلم لنقدم لك حلولًا ليست جيدة اليوم فحسب، بل مستعدة للمستقبل أيضًا." },
            { title: "مساعدتك على النمو", description: "نحن لا نقتصر على حل المشكلات فقط، بل نخلق فرصًا. نريد مساعدة عملك على تحقيق الإنجاز الكبير التالي." },
          ],
        },
      };
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-xl-5">
                    <h2 className={`${styles.BelieveHeading}`}>{translations[language as "en" | "ar"]?.heading}</h2>
                </div>
                <div className="col-md-12">
          <div className={`row ${styles.believeBoxRow}`}>
            {translations[language as "en" | "ar"]?.values.map((item: TranslationItem, index : number) => (
              <div key={index} className="col-md-4">
                <div className={styles.believeBox}>
                  <h3 className={`${styles.believeBoxHeading} mb-0`}>{item.title}</h3>
                  <p className={`${styles.believeBoxDescription} mb-0`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default BelieveIn