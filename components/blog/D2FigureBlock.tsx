import Image from 'next/image';
import { ReactNode, useState } from 'react';
import styles from '@styles/blog/D2FigureBlock.module.css';

export const D2FigureBlock = ({ children }: { children: ReactNode }) => {
  if (children === '::d2-shako-unidentified') {
    return <ShakoImage />;
  }

  return null;
};

const ShakoImage = () => {
  const [hovering, setHovering] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  return (
    <figure className={styles['shako-image-fig']}>
      <Image
        src="https://static.d2r.world/img/items/base/cap_hat.jpg"
        alt=""
        width={120}
        height={120}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onMouseMove={(e) => setHoverPosition({ x: e.clientX, y: e.clientY })}
      />
      <figcaption className={styles['figure-caption']}>
        Figure 1-1: Unidentified unique shako. Hover to show item card
      </figcaption>
      {hovering ? (
        <ItemCard
          baseType="SHAKO"
          quality="unique"
          defense={98}
          durability={12}
          requiredStrength={50}
          requiredLevel={43}
          identified={false}
          floatPosition={hoverPosition}
        />
      ) : null}
    </figure>
  );
};

const ItemCard = ({
  name,
  baseType,
  quality,
  defense,
  oneHandDamage,
  durability,
  requiredStrength,
  requiredDexterity,
  requiredLevel,
  weaponClass,
  attackSpeed,
  identified,
  floatPosition,
}: {
  name?: string;
  baseType: string;
  quality: 'normal' | 'magic' | 'rare' | 'unique';
  defense?: number;
  oneHandDamage?: number;
  durability: number;
  requiredStrength?: number;
  requiredDexterity?: number;
  requiredLevel?: number;
  weaponClass?: string;
  attackSpeed?: string;
  identified?: boolean;
  floatPosition: { x: number; y: number };
}) => (
  <div
    className={styles['item-card']}
    style={{
      top: `${floatPosition.y - 5}px`,
      left: `${floatPosition.x + 10}px`,
    }}
  >
    {name ? (
      <div className={styles.name} data-quality={quality}>
        {name}
      </div>
    ) : null}
    <div className={styles['base-type']} data-quality={quality}>
      {baseType}
    </div>
    {defense ? <div>DEFENSE: {defense}</div> : null}
    {oneHandDamage ? <div>ONE-HAND DAMAGE: {oneHandDamage}</div> : null}
    <div>DURABILITY: {durability}</div>
    {requiredStrength ? <div>REQUIRED STRENGTH: {requiredStrength}</div> : null}
    {requiredDexterity ? (
      <div>REQUIRED DEXTERITY: {requiredDexterity}</div>
    ) : null}
    {requiredLevel ? <div>REQUIRED LEVEL: {requiredLevel}</div> : null}
    {weaponClass && attackSpeed ? (
      <div>
        {weaponClass} CLASS - {attackSpeed} ATTACK SPEED
      </div>
    ) : null}
    {identified === false ? (
      <div className={styles.unidentified}>UNIDENTIFIED</div>
    ) : null}
  </div>
);
