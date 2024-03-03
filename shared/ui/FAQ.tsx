import { AnimationControls, motion, useAnimationControls } from "framer-motion";

const FAQ = ({
  FAQcontent,
  WorklinksControls,
}: {
  FAQcontent: { question: string; answer: string }[];
  WorklinksControls: AnimationControls;
}) => {
  const Qcontrols = useAnimationControls();
  const Acontrols = useAnimationControls();
  const handleInViewFAQ = () => {
    Qcontrols.start({
      opacity: 1,
      transition: { delay: 0, duration: 1 },
    });

    Acontrols.start({
      opacity: 1,
      transition: { delay: 0.5, duration: 1 },
    });
  };
  const showWorkLinks = () => {
    WorklinksControls.start({
      opacity: 1,
      transition: { duration: 2 },
    });
  };
  const hideWorkLinks = () => {
    WorklinksControls.start({
      opacity: 0,
      transition: { duration: 0 },
    });
  };
  return (
    <div className="w-2/4  flex flex-col gap-8 ">
      {FAQcontent.map((faq, index) => {
        return (
          <motion.div
            onViewportEnter={showWorkLinks}
            onViewportLeave={hideWorkLinks}
            className="flex flex-col gap-12"
          >
            <div className="flex gap-4">
              <div className="border-2 border-gray-600 text-gray-600 text-[18px] font-bold rounded-xl w-8 text-center h-[30px]">
                {index + 1}
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={Qcontrols}
                  onViewportEnter={() => handleInViewFAQ()}
                  className="text-xl lg:text-2xl xl:text-3xl font-medium text-gray-300"
                >
                  {faq.question}
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={Acontrols}
                  onViewportEnter={() => handleInViewFAQ()}
                  className="text-md lg:text-xl xl:text-2xl text-gray-500"
                >
                  {faq.answer}
                </motion.span>
              </div>
            </div>
            <span className=" border-b-[1px]  border-gray-700"></span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FAQ;
