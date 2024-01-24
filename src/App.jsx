import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useGlobalContext } from './context';

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <main>
        <div class="loader"></div>
      </main>
    );
  }
  return (
    <>
      <Navbar />
      <CartContainer />
    </>
  );
};
export default App;
