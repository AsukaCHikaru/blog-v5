import Image from 'next/image';
import { ReactNode, useState } from 'react';
import styles from '@styles/blog/D2FigureBlock.module.css';

export const D2FigureBlock = ({ children }: { children: ReactNode }) => {
  if (children === '::d2-shako-unidentified') {
    return <ShakoImage />;
  }

  if (children === '::d2-crystal-sword-family') {
    return <CrystalSwordFamilyImages />;
  }

  if (children === '::d2-mf-quality-factor-table') {
    return <MagicFindQualityFactorTable />;
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

const CrystalSwordFamilyImages = () => (
  <figure className={styles['crystal-sword-family-image-fig']}>
    <div>
      <HoverableItemImage
        imageSrc="https://static.d2r.world/img/items/base/crystal_sword.jpg"
        alt=""
        item={{
          baseType: 'CRYSTAL SWORD',
          quality: 'normal',
          durability: 20,
          oneHandDamage: {
            min: 5,
            max: 15,
          },
          requiredStrength: 43,
          weaponClass: 'SWORD',
          attackSpeed: 'FAST',
        }}
      />
      <HoverableItemImage
        imageSrc="https://static.d2r.world/img/items/base/crystal_sword.jpg"
        alt=""
        item={{
          baseType: 'DIMENSIONAL BLADE',
          quality: 'normal',
          durability: 20,
          oneHandDamage: {
            min: 15,
            max: 35,
          },
          requiredStrength: 85,
          requiredDexterity: 60,
          requiredLevel: 25,
          weaponClass: 'SWORD',
          attackSpeed: 'FAST',
        }}
      />
      <HoverableItemImage
        imageSrc="https://static.d2r.world/img/items/base/crystal_sword.jpg"
        alt=""
        item={{
          baseType: 'PHASE BLADE',
          quality: 'normal',
          durability: 'indestructible',
          oneHandDamage: {
            min: 31,
            max: 35,
          },
          requiredStrength: 25,
          requiredDexterity: 136,
          requiredLevel: 54,
          weaponClass: 'SWORD',
          attackSpeed: 'VERY FAST',
        }}
      />
    </div>
    <figcaption className={styles['figure-caption']}>Figure 1-2</figcaption>
  </figure>
);

const MagicFindQualityFactorTable = () => (
  <figure className={styles['magic-find-quality-factor-table-fig']}>
    <table border={1}>
      <thead>
        <tr>
          <th>Quality</th>
          <th>Quality Factor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Unique</td>
          <td>250</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>500</td>
        </tr>
        <tr>
          <td>Rare</td>
          <td>600</td>
        </tr>
      </tbody>
    </table>
    <p>
      For magic items the <strong>Effective MF</strong> equals to MF.
    </p>
    <figcaption>fig</figcaption>
  </figure>
);

type Item = {
  name?: string;
  baseType: string;
  quality: 'normal' | 'magic' | 'rare' | 'unique';
  defense?: number;
  oneHandDamage?: {
    min: number;
    max: number;
  };
  durability: number | 'indestructible';
  requiredStrength?: number;
  requiredDexterity?: number;
  requiredLevel?: number;
  weaponClass?: string;
  attackSpeed?: string;
  identified?: boolean;
};

const HoverableItemImage = ({
  imageSrc,
  alt,
  item,
}: {
  imageSrc: string;
  alt: string;
  item: Item;
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
        <ItemCard item={item} floatPosition={hoverPosition} />
      ) : null}
    </>
  );
};

const ItemCard = ({
  item,
  floatPosition,
}: {
  item: Item;
  floatPosition: { x: number; y: number };
}) => (
  <div
    className={styles['item-card']}
    style={{
      top: `${floatPosition.y - 5}px`,
      left: `${floatPosition.x + 10}px`,
    }}
  >
    {item.name ? (
      <div className={styles.name} data-quality={item.quality}>
        {item.name}
      </div>
    ) : null}
    <div className={styles['base-type']} data-quality={item.quality}>
      {item.baseType}
    </div>
    {item.defense ? <div>DEFENSE: {item.defense}</div> : null}
    {item.oneHandDamage ? (
      <div>
        ONE-HAND DAMAGE: {item.oneHandDamage.min} TO {item.oneHandDamage.max}
      </div>
    ) : null}
    {typeof item.durability === 'number' ? (
      <div>DURABILITY: {item.durability}</div>
    ) : (
      <div>INDESTRUCTIBLE</div>
    )}
    {item.requiredStrength ? (
      <div>REQUIRED STRENGTH: {item.requiredStrength}</div>
    ) : null}
    {item.requiredDexterity ? (
      <div>REQUIRED DEXTERITY: {item.requiredDexterity}</div>
    ) : null}
    {item.requiredLevel ? (
      <div>REQUIRED LEVEL: {item.requiredLevel}</div>
    ) : null}
    {item.weaponClass && item.attackSpeed ? (
      <div>
        {item.weaponClass} CLASS - {item.attackSpeed} ATTACK SPEED
      </div>
    ) : null}
    {item.identified === false ? (
      <div className={styles.unidentified}>UNIDENTIFIED</div>
    ) : null}
  </div>
);
