import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

export default function Home() {
  function clicked() {
    console.log('tıkladı');
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Age Calculator</title>
      </Head>
      <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="h-screen flex items-center justify-center">
          <div class="bg-white p-12 rounded shadow-lg">
            Merhaba, ben ekranın ortasındayım! <br />
            <Button onClick={clicked} severity="success" label="Hesapla" />
          </div>
        </div>
      </div>
    </div>
  );
}
