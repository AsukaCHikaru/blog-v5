import Image from 'next/image';
import { useMemo, useState } from 'react';
import styles from '@styles/blog/D2FigureBlock.module.css';

export const D2FigureBlock = ({ children }: { children: string }) => {
  const [blockCode, caption] = useMemo(
    () => (children.includes('|') ? children.split('|') : [children]),
    [children],
  );

  switch (blockCode) {
    case '::d2-shako-unidentified':
      return <ShakoImage caption={caption} />;
    case '::d2-crystal-sword-family':
      return <CrystalSwordFamilyImages caption={caption} />;
    case '::d2-pinball':
      return (
        <figure className={styles.figure}>
          <div className={styles['image-graph']}>
            <Image
              src="/images/under-the-hood-diablo-ii-item-generation-pinball-machine.jpg"
              alt=""
              width={450}
              height={450}
            />
          </div>
          <figcaption className={styles['figure-caption']}>
            {caption}
          </figcaption>
        </figure>
      );
    case '::d2-pinball-list':
      return (
        <figure className={styles.figure}>
          <div className={styles['image-graph']}>
            <Image
              src="/images/under-the-hood-diablo-ii-item-generation-pinball-machine-fallback-scheme.jpg"
              alt=""
              width={450}
              height={450}
            />
          </div>
          <figcaption className={styles['figure-caption']}>
            {caption}
          </figcaption>
        </figure>
      );
    case '::d2-diadem-set-unique':
      return <DiademImages caption={caption} />;
    case '::d2-monster-champions':
      return <ChampionMonsters caption={caption} />;
    case '::d2-mf-quality-factor-table':
      return <MagicFindQualityFactorTable caption={caption} />;
    case '::d2-max-socket-number-table-fig':
      return <MaxSocketTable caption={caption} />;
    case '::d2-quality-check-process':
      return <QualityCheckGraph caption={caption} />;
    case '::d2-socket-number-chance-table-fig':
      return <SocketNumberChanceTable caption={caption} />;
    case '::d2-socket-item':
      return <SocketItem caption={caption} />;
    case '::d2-magic-item':
      return <MagicItem caption={caption} />;
    case '::d2-magic-item-two-affixes':
      return (
        <figure className={styles.figure}>
          <HoverableItemImage
            imageSrc="/images/under-the-hood-diablo-ii-item-generation-grimwand.png"
            imageSize={{ width: 84, height: 168 }}
            alt=""
            item={{
              baseType: 'VICTORIOUS GRIM WAND OF BRILLIANCE',
              quality: 'magic',
              damage: {
                type: 'one-hand',
                min: 5,
                max: 11,
              },
              durability: 15,
              requiredLevel: 12,
              weaponClass: 'STAFF',
              attackSpeed: 'FAST',
              affixes: [
                '+9 TO ENERGY',
                '+5 TO MANA AFTER EACH KILL',
                '+50% DAMAGE TO UNDEAD',
              ],
            }}
          />
          <figcaption className={styles['figure-caption']}>
            {caption}
          </figcaption>
        </figure>
      );
    default:
      return (
        <figcaption className={styles['figure-caption']}>{caption}</figcaption>
      );
  }
};

const ShakoImage = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
    <HoverableItemImage
      imageSrc="/images/under-the-hood-diablo-ii-item-generation-shako.png"
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
  <figure className={styles.figure}>
    <div className={styles['item-family-image-container']}>
      <HoverableItemImage
        imageSrc="/images/under-the-hood-diablo-ii-item-generation-crystal-sword.png"
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
        imageSrc="/images/under-the-hood-diablo-ii-item-generation-crystal-sword.png"
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
        imageSrc="/images/under-the-hood-diablo-ii-item-generation-crystal-sword.png"
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

const DiademImages = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
    <div className={styles['item-family-image-container']}>
      <HoverableItemImage
        imageSrc="/images/under-the-hood-diablo-ii-item-generation-diadem.png"
        imageSize={{ width: 112, height: 112 }}
        alt=""
        item={{
          baseType: 'DIADEM',
          quality: 'normal',
          durability: 20,
          defense: 50,
          requiredLevel: 64,
        }}
      />
      <HoverableItemImage
        imageSrc="/images/under-the-hood-diablo-ii-item-generation-diadem.png"
        imageSize={{ width: 112, height: 112 }}
        alt=""
        item={{
          name: "M'AVINA'S TRUE SIGHT",
          baseType: 'DIADEM',
          quality: 'set',
          durability: 20,
          defense: 200,
          requiredLevel: 64,
          affixes: [
            '+30% INCREASED ATTACK SPEED',
            '+150 DEFENSE',
            'REPLENISH LIFE +10',
            '+25 TO MANA',
          ],
          set: {
            name: "M'AVINA'S BATTLE HYMN",
            pieces: [
              "M'AVINA'S CASTER",
              "M'AVINA'S TENET",
              "M'AVINA'S CLUTCH",
              "M'AVINA'S EMBRACE",
              "M'AVINA'S TRUE SIGHT",
            ],
          },
        }}
      />
      <HoverableItemImage
        imageSrc="/images/under-the-hood-diablo-ii-item-generation-diadem.png"
        imageSize={{ width: 112, height: 112 }}
        alt=""
        item={{
          name: "Griffon's Eye",
          baseType: 'DIADEM',
          quality: 'unique',
          durability: 20,
          defense: 260,
          requiredLevel: 76,
          affixes: [
            '+1 TO ALL SKILLS',
            '+25% FASTER CAST RATE',
            '-15% TO ENEMY LIGHTNING RESISTANCE',
            '+11% TO LIGHTNING SKILL DAMAGE',
            '+200 DEFENSE',
          ],
        }}
      />
    </div>
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const MagicFindQualityFactorTable = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const ChampionMonsters = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
    <div className={styles['champion-monsters-img-container']}>
      <div className={styles['champion-monster-img']}>
        <MonsterCard
          name="CHAMPION FALLEN"
          modifiers={['Demon']}
          quality="magic"
        />
        <div className={styles['champion-monster-img-wrapper']}>
          <Image
            src="/images/under-the-hood-diablo-ii-item-generation-fallen.webp"
            alt="Champion"
            width={74}
            height={122}
          />
        </div>
      </div>
      <div className={styles['champion-monster-img']}>
        <MonsterCard
          name="CORPSEFIRE"
          modifiers={['Undead', 'Spectral Hit']}
          quality="unique"
        />
        <div className={styles['champion-monster-img-wrapper']}>
          <Image
            src="/images/under-the-hood-diablo-ii-item-generation-corpsefire.webp"
            alt="Champion"
            width={54}
            height={118}
          />
        </div>
      </div>
      <div className={styles['champion-monster-img']}>
        <MonsterCard name="ANDARIEL" modifiers={['Demon']} quality="unique" />
        <Image
          src="/images/under-the-hood-diablo-ii-item-generation-andariel.webp"
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
  quality,
}: {
  name: string;
  modifiers: string[];
  quality: 'magic' | 'unique';
}) => (
  <div className={styles['monster-card']} data-quality={quality}>
    <p>{name}</p>
    <p>{modifiers.join('・')}</p>
  </div>
);

const QualityCheckGraph = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
    <div className={styles['image-graph']}>
      <Image
        src="/images/under-the-hood-diablo-ii-item-generation-quality-check.png"
        alt=""
        width={600}
        height={300}
      />
    </div>
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const MaxSocketTable = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const SocketNumberChanceTable = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const SocketItem = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
    <HoverableItemImage
      imageSrc="/images/under-the-hood-diablo-ii-item-generation-claymore.png"
      imageSize={{
        width: 56,
        height: 236,
      }}
      alt=""
      item={{
        baseType: 'CLAYMORE',
        quality: 'socketed',
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

const MagicItem = ({ caption }: { caption: string }) => (
  <figure className={styles.figure}>
    <HoverableItemImage
      imageSrc="/images/under-the-hood-diablo-ii-item-generation-hunters-bow.png"
      imageSize={{
        width: 112,
        height: 168,
      }}
      alt=""
      item={{
        baseType: "ARCADIAN HUNTER'S BOW",
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
    <figcaption className={styles['figure-caption']}>{caption}</figcaption>
  </figure>
);

type Item = {
  name?: string;
  baseType: string;
  quality: 'normal' | 'magic' | 'rare' | 'unique' | 'socketed' | 'set';
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
  set?: {
    name: string;
    pieces: string[];
  };
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
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div
        className={styles['hoverable-image-wrapper']}
        onMouseLeave={() => setIsHovering(false)}
        onMouseEnter={() => setIsHovering(true)}
      >
        {isHovering ? <ItemCard item={item} /> : null}
        <Image
          src={imageSrc}
          alt={alt}
          width={imageSize.width}
          height={imageSize.height}
        />
        {isHovering &&
        item.affixes?.some((affix) => affix.includes('SOCKETED')) ? (
          <div className={styles['socket-item-socket-container']}>
            <div className={styles['socket-item-socket']} />
            <div className={styles['socket-item-socket']} />
            <div className={styles['socket-item-socket']} />
          </div>
        ) : null}
      </div>
    </>
  );
};

const ItemCard = ({ item }: { item: Item }) => (
  <div className={styles['item-card']}>
    {item.name ? (
      <div className={styles.name} data-quality={item.quality}>
        <ItemCardLabel>{item.name}</ItemCardLabel>
      </div>
    ) : null}
    <div className={styles['base-type']} data-quality={item.quality}>
      <ItemCardLabel>{item.baseType}</ItemCardLabel>
    </div>
    {item.defense ? (
      <div className={styles.defense}>
        <ItemCardLabel>DEFENSE: </ItemCardLabel>
        <span
          className={`${
            item.affixes?.some((affix) => /\+\d+\sDEFENSE/.test(affix))
              ? styles.affix
              : undefined
          } ${styles['item-card-label-big']}`}
        >
          {`${item.defense}`}
        </span>
      </div>
    ) : null}
    {item.damage ? (
      <ItemCardLabel>
        {`${item.damage.type.toUpperCase()} DAMAGE: ${item.damage.min} TO ${
          item.damage.max
        }`}
      </ItemCardLabel>
    ) : null}
    {typeof item.durability === 'number' ? (
      <ItemCardLabel>
        {`DURABILITY: ${item.durability} OF ${item.durability}`}
      </ItemCardLabel>
    ) : item.durability === 'indestructible' ? (
      <ItemCardLabel>INDESTRUCTIBLE</ItemCardLabel>
    ) : null}
    {item.requiredStrength ? (
      <ItemCardLabel>
        {`REQUIRED STRENGTH: ${item.requiredStrength}`}
      </ItemCardLabel>
    ) : null}
    {item.requiredDexterity ? (
      <ItemCardLabel>
        {`REQUIRED DEXTERITY: ${item.requiredDexterity}`}
      </ItemCardLabel>
    ) : null}
    {item.requiredLevel ? (
      <ItemCardLabel>{`REQUIRED LEVEL: ${item.requiredLevel}`}</ItemCardLabel>
    ) : null}
    {item.weaponClass && item.attackSpeed ? (
      <ItemCardLabel>
        {`${item.weaponClass} CLASS - ${item.attackSpeed} ATTACK SPEED`}
      </ItemCardLabel>
    ) : null}
    {item.identified === false ? (
      <ItemCardLabel className={styles.unidentified}>
        UNIDENTIFIED
      </ItemCardLabel>
    ) : null}
    {item.affixes
      ? item.affixes.map((affix) => (
          <ItemCardLabel key={affix} className={styles.affix}>
            {affix}
          </ItemCardLabel>
        ))
      : null}
    {item.set ? (
      <>
        <ItemCardLabel className={styles['set-name']}>
          {item.set.name}
        </ItemCardLabel>
        {item.set.pieces.map((piece) => (
          <ItemCardLabel
            key={piece}
            className={
              piece === item.name
                ? styles['set-piece-acquired']
                : styles['set-piece-not-acquired']
            }
          >
            {piece}
          </ItemCardLabel>
        ))}
      </>
    ) : null}
  </div>
);

const ItemCardLabel = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => (
  <div>
    {children.split(/\s/).map((str) => (
      <>
        <span
          key={str}
          className={`${
            /\d/.test(str)
              ? styles['item-card-label-big']
              : /^(TO)|(OF)|(AFTER)|(EACH)$/.test(str)
              ? styles['item-card-label-small']
              : styles['item-card-label']
          } ${className || ''}`}
        >
          {str}
        </span>
        <span> </span>
      </>
    ))}
  </div>
);
