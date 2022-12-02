import styles from './Bars.module.css';

interface BarProps {
   fill?: boolean;
}

export const Bar = ({ fill }: BarProps) => {
   return <div className={fill ? styles.fill : styles.bar}></div>;
};
