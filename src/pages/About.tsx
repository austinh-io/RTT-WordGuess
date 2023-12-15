import { motion } from 'framer-motion';

const pageTransition = {
  initial: {
    x: '100vw',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      duration: 0.5,
    },
  },
};
const About: React.FC = () => {
  return (
    <motion.div
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageTransition}
      className='flex flex-grow justify-between items-center header px-4 h-full w-[100vw]'>
      <div className='flex sm:flex-row flex-col-reverse mx-auto justify-normal sm:justify-between items-center w-full max-w-screen-xl py-16'>
        <div className='flex flex-col items-start justify-center w-full'>
          <h1 className='md:text-6xl text-4xl mt-8 md:mt-0 text-indigo-200 font-semibold'>
            About
          </h1>
          <p className='md:text-xl text-lg mt-4 text-indigo-200'>
            A game about finding the hidden word.
          </p>
          <p className='mt-4 text-indigo-200'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            consequuntur dignissimos qui repellendus sapiente tempore laboriosam
            quam nam, perferendis magnam architecto eaque earum corporis
            officiis doloribus. Exercitationem ad corrupti doloremque quisquam
            ducimus nostrum pariatur sequi. Rerum similique laborum minus
            possimus aliquid veniam? Ipsum quidem delectus reiciendis ea enim
            hic itaque excepturi numquam doloremque. Perspiciatis, inventore
            iure!
          </p>
          <p className='mt-4 text-indigo-200'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            excepturi, impedit nobis, adipisci quam eum expedita, ratione
            tempore fugiat doloribus deserunt natus eligendi corporis veniam
            optio non nemo fuga inventore accusamus! Qui at a quaerat rem ab
            officia animi facere possimus quibusdam, aliquam asperiores
            accusamus fugiat tempore iusto! Modi, aliquam. Quo, sunt quaerat
            dolor illo magnam nisi ipsa! Asperiores deleniti obcaecati at
            laudantium autem nostrum, dolorem soluta vel nesciunt necessitatibus
            recusandae inventore hic voluptas iure itaque nemo exercitationem
            doloribus nihil ducimus eaque aliquam minus quas? Error totam rerum
            quod velit molestiae quasi delectus deleniti. Doloremque sed, nobis
            dolore blanditiis neque vel earum minus! Reiciendis laborum soluta
            ab cum odio perferendis voluptas unde odit impedit quo harum sunt,
            omnis minima accusantium!
          </p>
          <p className='mt-4 text-indigo-200'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius illum
            repudiandae qui debitis quo praesentium accusamus amet. Beatae iste
            quae ut iusto, maxime excepturi saepe officiis consequuntur
            cupiditate et nemo illum nihil? Quaerat et a eos aliquid, sit
            adipisci explicabo provident aperiam aspernatur distinctio in neque,
            dignissimos beatae rem id quidem consequatur tenetur repellendus ab
            ad laborum, cumque quam enim? Corrupti, dicta ipsam. Pariatur?
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
