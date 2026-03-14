import Image from "next/image";
import styles from "./TarotCard.module.css";

interface TarotCardProps {
  symbol: string;
  label: string;
  index: number;
  imageSrc?: string;
  imageAlt?: string;
}

export default function TarotCard({
  symbol,
  label,
  index,
  imageSrc,
  imageAlt,
}: TarotCardProps) {
  return (
    <div className={`${styles.tarotCard} ${styles[`card${index}`]}`}>
      <div className={styles.cardBorderDeco} />
      <div className={styles.cardInner}>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt ?? label}
            fill
            className={styles.cardImage}
            sizes="(max-width: 580px) 96px, 120px"
          />
        ) : (
          <>
            <div className={styles.cardSymbol}>{symbol}</div>
            <div className={styles.cardLabel}>{label}</div>
          </>
        )}
      </div>
    </div>
  );
}
