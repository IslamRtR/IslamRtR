let futbolist = {
    name: "Islam",
    tegi: "Gabbas",
    jasy: 16,
    gol_sany: 345,
    komandalary: ["bundestrails", "ansar", "Kairat"]
};

function atynTeğinShygar() {
    return futbolist.name + " " + futbolist.tegi;
}

function kazirgiKluby() {
    return futbolist.komandalary[futbolist.komandalary.length - 1];
}

let fullInfo = `Аты: ${futbolist.name}
Тегі: ${futbolist.tegi}
Жасы: ${futbolist.jasy}
Негізгі гол саны: ${futbolist.gol_sany}
Қазіргі клубы: ${kazirgiKluby()}
Барлық командалары: ${futbolist.komandalary.join(", ")}`;

alert(fullInfo);

futbolist.gol_sany += 5;

let updatedInfo = `сонғы екі ойынан соққан голдарын санасақЖ ${futbolist.gol_sany}`;

alert(updatedInfo);
