import styles from './Bars.module.css';

interface BarProps {
   fill?: 'true';
}

export const Bar = ({ fill }: BarProps) => {
   return <span className={fill ? styles.fill : styles.bar}></span>;
};
