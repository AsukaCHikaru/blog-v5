import Image from 'next/image';
import { ReactNode, useState } from 'react';
import styles from '@styles/blog/D2FigureBlock.module.css';

export const D2FigureBlock = ({ children }: { children: ReactNode }) => {
  if (children === '::d2-shako-unidentified') {
    return <ShakoImage />;
  }

  return null;
};

const ShakoImage = () => (
  <figure className={styles['shako-image-fig']}>
    <HoverableItemImage
      imageSrc="https://static.d2r.world/img/items/base/cap_hat.jpg"
      alt=""
      item={{
        baseType: 'SHAKO',
        quality: 'unique',
        durability: 12,
        defense: 98,
        requiredStrength: 50,
        requiredLevel: 43,
        identified: false,
      }}
    />
    <figcaption className={styles['figure-caption']}>
      Figure 1-1: Unidentified unique shako. Hover to show item card
    </figcaption>
  </figure>
);

const HoverableItemImage = ({
  imageSrc,
  alt,
  item,
}: {
  imageSrc: string;
  alt: string;
  item: {
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
  };
}) => {
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  return (
    <>
      <Image
        src={imageSrc}
        alt={alt}
        width={120}
        height={120}
        onMouseLeave={() => setHoverPosition(null)}
        onMouseMove={(e) => setHoverPosition({ x: e.clientX, y: e.clientY })}
      />
      {hoverPosition !== null ? (
        <ItemCard
          name={item.name}
          baseType={item.baseType}
          quality={item.quality}
          defense={item.defense}
          oneHandDamage={item.oneHandDamage}
          durability={item.durability}
          requiredStrength={item.requiredStrength}
          requiredDexterity={item.requiredDexterity}
          requiredLevel={item.requiredLevel}
          weaponClass={item.weaponClass}
          attackSpeed={item.attackSpeed}
          identified={item.identified}
          floatPosition={hoverPosition}
        />
      ) : null}
    </>
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
