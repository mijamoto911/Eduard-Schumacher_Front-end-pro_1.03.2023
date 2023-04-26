class Student {
    constructor(firstName, lastName, year, marks = []) {
        Object.assign(this, { firstName, lastName, year, marks })
        this.presenceMarks = new Array(25);
    }

    getAge() {
        return Math.max((new Date()).getFullYear() - this.year, 0) || undefined;
    }

    getAverageMark(preciosity = 1) {
        if (!this.marks.length) return undefined;

        const avg =
            this.marks.reduce((sum, v) => sum + v) /
            this.marks.length

        const pow = Math.pow(10, preciosity);

        return Math.round(avg * pow) / pow
    }

    _present(mark) {
        const freePos = this.presenceMarks.findIndex(v => v === undefined);
        if (freePos === -1) return

        this.presenceMarks[freePos] = mark;
    }

    present() {
        this._present(true);
    }

    absent() {
        this._present(false);
    }
}

const student1 = new Student('Jimy', 'Hendix', 2945, [80, 90, 95, 85]);

console.log(student1.firstName);
console.log(student1.lastName);
console.log(student1.getAge());
console.log(student1.getAverageMark());

student1.present();
student1.present();
student1.absent();
console.log(student1.presenceMarks);
console.log('___________')

const student2 = new Student('Arnold', 'Schwarzeneger', 1950, [82, 91, 84, 90]);

console.log(student2.firstName);
console.log(student2.lastName);
console.log(student2.getAge());
console.log(student2.getAverageMark());

student2.present();
student2.present();
student2.absent();

console.log(student2.presenceMarks);
console.log('___________')

const student3 = new Student('Silvester', 'Stalone', 1947, [70, 80, 80, 75]);

console.log(student3.firstName);
console.log(student3.lastName);
console.log(student3.getAge());
console.log(student3.getAverageMark());

student3.present();
student3.present();
student3.absent();

console.log(student3.presenceMarks);