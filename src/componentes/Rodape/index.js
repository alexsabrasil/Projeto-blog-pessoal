import styles from './Rodape.module.css';


export default function Radape() {
      return (
        <footer className={styles.rodape}>
            <p>&copy; {new Date().getFullYear()} | Proudly developed by <strong>Alexsandra Silva.</strong></p>
    </footer>
  );
};


    