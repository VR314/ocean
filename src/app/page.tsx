import HomeScreen from "./HomeScreen";
import Tabs from '../app/Tabs';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HomeScreen />
      <Tabs />
    </main>
  );
}
