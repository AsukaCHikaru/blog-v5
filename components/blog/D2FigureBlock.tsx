import Image from 'next/image';
import { useMemo, useState } from 'react';
import styles from '@styles/blog/D2FigureBlock.module.css';

export const D2FigureBlock = ({ children }: { children: string }) => {
  const [blockCode, caption] = useMemo(
    () => (children.includes('|') ? children.split('|') : [children]),
    [children],
  );

  if (blockCode === '::d2-shako-unidentified') {
    return <ShakoImage caption={caption} />;
  }

  if (blockCode === '::d2-crystal-sword-family') {
    return <CrystalSwordFamilyImages caption={caption} />;
  }

  if (blockCode === '::d2-monster-champions') {
    return <ChampionMonsters caption={caption} />;
  }

  if (blockCode === '::d2-mf-quality-factor-table') {
    return <MagicFindQualityFactorTable />;
  }

  if (blockCode === '::d2-max-socket-number-table-fig') {
    return <MaxSocketTable />;
  }
  if (blockCode === '::d2-socket-number-chance-table-fig') {
    return <SocketNumberChanceTable />;
  }

  if (blockCode === '::d2-socket-item') {
    return <SocketItem caption={caption} />;
  }

  if (blockCode === '::d2-magic-item') {
    return <MagicItem caption={caption} />;
  }

  return blockCode;
};

const ShakoImage = ({ caption }: { caption: string }) => (
  <figure className={styles['shako-image-fig']}>
    <HoverableItemImage
      imageSrc="/images/deep-dive-diablo-ii-item-generation-shako.png"
      imageSize={{ width: 120, height: 120 }}
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const CrystalSwordFamilyImages = ({ caption }: { caption: string }) => (
  <figure className={styles['crystal-sword-family-image-fig']}>
    <div>
      <HoverableItemImage
        imageSrc="/images/deep-dive-diablo-ii-item-generation-crystal-sword.png"
        imageSize={{ width: 112, height: 168 }}
        alt=""
        item={{
          baseType: 'CRYSTAL SWORD',
          quality: 'normal',
          durability: 20,
          damage: {
            type: 'one-hand',
            min: 5,
            max: 15,
          },
          requiredStrength: 43,
          weaponClass: 'SWORD',
          attackSpeed: 'FAST',
        }}
      />
      <HoverableItemImage
        imageSrc="/images/deep-dive-diablo-ii-item-generation-crystal-sword.png"
        imageSize={{ width: 112, height: 168 }}
        alt=""
        item={{
          baseType: 'DIMENSIONAL BLADE',
          quality: 'normal',
          durability: 20,
          damage: {
            type: 'one-hand',
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
        imageSrc="/images/deep-dive-diablo-ii-item-generation-crystal-sword.png"
        imageSize={{ width: 112, height: 168 }}
        alt=""
        item={{
          baseType: 'PHASE BLADE',
          quality: 'normal',
          durability: 'indestructible',
          damage: {
            type: 'one-hand',
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
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

const ChampionMonsters = ({ caption }: { caption: string }) => (
  <figure className={styles['champion-monsters-fig']}>
    <div>
      <div className={styles['champion-monster-img']}>
        <MonsterCard
          name="BLADE EATER"
          modifiers={['Undead', 'Extra Fast', 'Mana Burn']}
        />
        <div className={styles['champion-monster-img-wrapper']}>
          <Image
            src="/images/deep-dive-diablo-ii-item-generation-zombie.webp"
            alt="Champion"
            width={54}
            height={118}
          />
        </div>
      </div>
      <div className={styles['champion-monster-img']}>
        <MonsterCard name="CORPSEFIRE" modifiers={['Undead', 'Spectral Hit']} />
        <div className={styles['champion-monster-img-wrapper']}>
          <Image
            src="/images/deep-dive-diablo-ii-item-generation-corpsefire.webp"
            alt="Champion"
            width={54}
            height={118}
          />
        </div>
      </div>
      <div className={styles['champion-monster-img']}>
        <MonsterCard name="ANDARIEL" modifiers={['Demon']} />
        <Image
          src="/images/deep-dive-diablo-ii-item-generation-andariel.webp"
          alt="Champion"
          width={172}
          height={176}
        />
      </div>
    </div>
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const MonsterCard = ({
  name,
  modifiers,
}: {
  name: string;
  modifiers: string[];
}) => (
  <div className={styles['monster-card']}>
    <p className="name">{name}</p>
    <p className="modifier">{modifiers.join('・')}</p>
  </div>
);

const MaxSocketTable = () => (
  <figure className={styles['table-fig']}>
    <table border={1}>
      <thead>
        <tr>
          <th>iLvl</th>
          <th>Max socket number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-25</td>
          <td>3</td>
        </tr>
        <tr>
          <td>26-40</td>
          <td>4</td>
        </tr>
        <tr>
          <td>41-</td>
          <td>6</td>
        </tr>
      </tbody>
    </table>
    <figcaption>fig</figcaption>
  </figure>
);

const SocketNumberChanceTable = () => (
  <figure className={styles['table-fig']}>
    <table border={1}>
      <thead>
        <tr>
          <th>iLvl</th>
          <th>1S</th>
          <th>2S</th>
          <th>3S</th>
          <th>4S</th>
          <th>5S</th>
          <th>6S</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1-25</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>4/6</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>26-40</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>3/6</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>41-</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>1/6</td>
          <td>1/6</td>
        </tr>
      </tbody>
    </table>
    <figcaption>fig</figcaption>
  </figure>
);

const SocketItem = ({ caption }: { caption: string }) => (
  <figure className={styles['socket-item-fig']}>
    <div className={styles['socket-item']}>
      <HoverableItemImage
        imageSrc="/images/deep-dive-diablo-ii-item-generation-claymore.png"
        imageSize={{
          width: 56,
          height: 236,
        }}
        alt=""
        item={{
          baseType: 'CLAYMORE',
          quality: 'normal',
          durability: 50,
          damage: {
            type: 'two-hand',
            min: 13,
            max: 30,
          },
          requiredStrength: 47,
          weaponClass: 'SWORD',
          attackSpeed: 'FAST',
          affixes: ['SOCKETED (3)'],
        }}
      />
      <div className={styles['socket-item-socket-container']}>
        <div className={styles['socket-item-socket']} />
        <div className={styles['socket-item-socket']} />
        <div className={styles['socket-item-socket']} />
      </div>
    </div>
    <figcaption>{caption}</figcaption>
  </figure>
);

const MagicItem = ({ caption }: { caption: string }) => (
  <figure className={styles['magic-item']}>
    <HoverableItemImage
      imageSrc="/images/deep-dive-diablo-ii-item-generation-hunters-bow.png"
      imageSize={{
        width: 112,
        height: 168,
      }}
      alt=""
      item={{
        baseType: 'HUNTER BOW',
        quality: 'magic',
        damage: {
          type: 'two-hand',
          min: 2,
          max: 6,
        },
        requiredDexterity: 28,
        requiredLevel: 11,
        weaponClass: 'BOW',
        attackSpeed: 'FAST',
        affixes: [
          '+35% DAMAGE TO DEMONS',
          '+78 TO ATTACK RATING AGAINST DEMONS',
        ],
      }}
    />
    <figcaption>{caption}</figcaption>
  </figure>
);

type Item = {
  name?: string;
  baseType: string;
  quality: 'normal' | 'magic' | 'rare' | 'unique';
  defense?: number;
  damage?: {
    type: 'one-hand' | 'two-hand';
    min: number;
    max: number;
  };
  durability?: number | 'indestructible';
  requiredStrength?: number;
  requiredDexterity?: number;
  requiredLevel?: number;
  weaponClass?: string;
  attackSpeed?: string;
  identified?: boolean;
  affixes?: string[];
};

const HoverableItemImage = ({
  imageSrc,
  imageSize,
  alt,
  item,
}: {
  imageSrc: string;
  imageSize: {
    width: number;
    height: number;
  };
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
        width={imageSize.width}
        height={imageSize.height}
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
    {item.damage ? (
      <div>
        {item.damage.type.toUpperCase()} DAMAGE: {item.damage.min} TO{' '}
        {item.damage.max}
      </div>
    ) : null}
    {typeof item.durability === 'number' ? (
      <div>DURABILITY: {item.durability}</div>
    ) : item.durability === 'indestructible' ? (
      <div>INDESTRUCTIBLE</div>
    ) : null}
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
    {item.affixes
      ? item.affixes.map((affix) => (
          <div key={affix} className={styles.affix}>
            {affix}
          </div>
        ))
      : null}
  </div>
);