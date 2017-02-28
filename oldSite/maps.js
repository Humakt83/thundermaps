var descriptionAllyria = 'Evil versus good. Who will prevail?';
var commentAllyria1 = 'Just a fun allied map to be played with buddies or solo. Human players start with no starting towns and the earliest challenge is to amass enough forces to grab one. The map kind of plays like a gauntlet at start. Expect some tough battles.';
var commentAllyria2 = 'Finished map myself on Champion in little less than 12 months. Faced many 40 level heroes and even one 70 level one. I had 7 different armies by that time with the strongest having four level 30+ heroes with 300 Crusaders, 150 Champions and 200 Griffins.'

function Map(name, description, comments, pictures, thumbnails) {
    this.name = name;
    this.comments = comments;
    this.description = description;
    this.pictures = pictures;
    this.thumbnails = this.thumbnails;    
}

var h4Maps = [
    new Map('Allyria', descriptionAllyria, [commentAllyria1, commentAllyria2], ['AllyriaPhoto', 'AllyriaUGPhoto'], ['Allyria', 'AllyriaUG'])
];