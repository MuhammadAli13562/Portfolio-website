import { motion, useAnimationControls } from "framer-motion";

const FAQ = ({
  FAQcontent,
}: {
  FAQcontent: { question: string; answer: string }[];
}) => {
  const Qcontrols = useAnimationControls();
  const Acontrols = useAnimationControls();
  const handleInViewFAQ = (index: number, offset: number) => {
    console.log("index :", index);

    if (offset === 0) {
      const delay = 0.5 * index;
      console.log("Q delay : ", delay);

      Qcontrols.start({
        opacity: 1,
        transition: { delay, duration: 1 },
      });
    } else {
      const delay = offset + 0.5 * index;
      console.log("A delay :", delay);

      Acontrols.start({
        opacity: 1,
        transition: { delay, duration: 1 },
      });
    }
  };

  return (
    <div className="w-2/4  flex flex-col gap-8 ">
      {FAQcontent.map((faq, index) => {
        return (
          <div className="flex flex-col gap-12">
            <div className="flex gap-4">
              <div className="border-2 border-gray-600 text-gray-600 text-[18px] font-bold rounded-xl w-8 text-center h-[30px]">
                {index + 1}
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={Qcontrols}
                  onViewportEnter={() => handleInViewFAQ(index, 0)}
                  className="text-2xl font-medium text-gray-300"
                >
                  {faq.question}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={Acontrols}
                  onViewportEnter={() => handleInViewFAQ(index, 1)}
                  className="text-xl text-gray-500"
                >
                  {faq.answer}
                </motion.span>
              </div>
            </div>
            <span className=" border-b-[1px] w-[900px] border-gray-700"></span>
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
