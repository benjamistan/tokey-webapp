import { Toaster } from 'react-hot-toast';

const style = {
  container: 'flex text-center bg-white pb-40 pl-10',
  wrapper: `mt-auto`,
};

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className={style.container}></div>
    </div>
  );
}
