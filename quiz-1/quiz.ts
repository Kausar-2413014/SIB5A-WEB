// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini
class Mario {
    // Atribut dasar
    public HP: number = 1;
    public speed: number = 5;
    public positionX: number = 0;
    public positionY: number = 0;
    public invincible: boolean = false;
    public currentForm: string = 'mario';

   
    tampilkanStat(): void {
        console.log(`[STAT] Form: ${this.currentForm} | HP: ${this.HP} | Speed: ${this.speed} | Posisi X: ${this.positionX} | Kebal: ${this.invincible}`);
    }

    
    diserang(): void {
        console.log("\nAction: Mario diserang musuh!");
        
        if (this.invincible) {
            console.log("-> Mario sedang kebal! Tidak ada penurunan HP.");
        } else {
            this.HP -= 1;
            this.currentForm = 'mario'; 
            this.speed = 5; 
            console.log("-> HP berkurang, form dan kecepatan kembali normal.");
            
            if (this.HP <= 0) {
                console.log("-> GAME OVER!");
            }
        }
        // Tampilkan stat setelah diserang
        this.tampilkanStat();
    }

    
    bergerakKanan(): void {
        console.log("\nAction: Mario bergerak ke KANAN.");
        this.positionX += this.speed;
        this.tampilkanStat();
    }

    
    bergerakKiri(): void {
        console.log("\nAction: Mario bergerak ke KIRI.");
        this.positionX -= this.speed;
        this.tampilkanStat();
    }

    
    tembakApi(): void {
        console.log("\nAction: Mario mencoba menembak api.");
        if (this.currentForm === 'fire mario') {
            console.log("-> Fire Mario berhasil menembakkan bola api!");
        } else {
            console.log("-> Gagal. Mario tidak bisa menembakkan api dalam form ini.");
        }
    }
}


// =====================================================================
// 2. CLASS ITEM (INHERITANCE & POLYMORPHISM)
// =====================================================================

// Class Induk
class PowerUp {
    constructor(public namaItem: string) {}


    applyPowerUp(mario: Mario): void {
        console.log(`\nAction: Mario mendapatkan item [${this.namaItem}]`);
    }
}


class SuperMushroom extends PowerUp {
    constructor() {
        super("Super Mushroom"); // Panggil constructor induk
    }

    
    applyPowerUp(mario: Mario): void {
        super.applyPowerUp(mario); 
        mario.currentForm = 'super mario';
        mario.HP += 1;
       
        mario.tampilkanStat();
    }
}


class FireFlower extends PowerUp {
    constructor() {
        super("Fire Flower"); 
    }

   
    applyPowerUp(mario: Mario): void {
        super.applyPowerUp(mario);
        mario.currentForm = 'fire mario';
        mario.HP += 1;
        mario.tampilkanStat();
    }
}


class SuperStar extends PowerUp {
    constructor() {
        super("Super Star");
    }

    
    applyPowerUp(mario: Mario): void {
        super.applyPowerUp(mario);
        mario.invincible = true;
        mario.speed = 10; // 
        mario.tampilkanStat();
    }
}


// =====================================================================
// 3. EKSEKUSI / TESTING 
// =====================================================================

const mario = new Mario();

console.log("=== GAME DIMULAI ===");
mario.tampilkanStat();

// Berjalan normal
mario.bergerakKanan(); 


let item: PowerUp; 

// Skenario: Ambil Jamur
item = new SuperMushroom();
item.applyPowerUp(mario);

// Skenario: Ambil Bunga
item = new FireFlower();
item.applyPowerUp(mario);

// Uji coba menembak api
mario.tembakApi();

// Skenario: Ambil Bintang (Kebal dan Speed naik)
item = new SuperStar();
item.applyPowerUp(mario);

// Buktikan speed bertambah
mario.bergerakKanan(); 

// Skenario: Diserang musuh saat kebal
mario.diserang(); 

// Skenario: Efek bintang habis (simulasi)
console.log("\n(Simulasi efek Bintang habis...)");
mario.invincible = false;

// Skenario: Diserang musuh saat normal
mario.diserang();

// Buktikan speed kembali lambat dan mundur ke kiri
mario.bergerakKiri();