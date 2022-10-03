import styles from './App.module.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = () => {
  return (
    <div>
      <div className={styles.containerHeader}>
        <Header />
      </div>
      <Main />
    </div>
  );
};

export default App;
