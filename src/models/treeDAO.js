import slugify from "slugify"; // Note: npm install slugify
import shortid from "shortid";

const TABLE_NAME = "treePalTree";


class Tree {
    constructor(name, price, amount) {
        const slug = slugify(name.toLowerCase())+"-"+shortid.generate();
        this.slug = slug;
        this.name = name;
        this.price = price;
        this.amount = amount;
    }
}


export default class treeDAO {
    constructor() {
        const treesJSON = localStorage.getItem(TABLE_NAME)
        const treesArr = JSON.parse(treesJSON);
        if (treesArr === undefined || treesArr === null || treesArr === "") {
            const emptyArr = [];
            const emptyJSON = JSON.stringify(emptyArr);
            localStorage.setItem(TABLE_NAME, emptyJSON);
        }
    }

    /**
      * Private function.
      */
    saveToLocalStorage(treesArr) {
        localStorage.setItem(TABLE_NAME, JSON.stringify(treesArr));
    }

    getList() {
        const treesJSON = localStorage.getItem(TABLE_NAME);
        const treesArr = JSON.parse(treesJSON);
        return treesArr;
    }

    addObject(name, price, amount) {
        const tree = new Tree(name, price, amount);

        const treesArr = this.getList();
        treesArr.push(tree);

        this.saveToLocalStorage(treesArr);
    }

    getObjectBySlug(slug) {
        let treeObj;
        for (treeObj of this.getList()) {
            if (treeObj.slug === slug) {
                return treeObj;
            }
        }
        return null;
    }

    updateObjectBySlug(slug, name, price, amount) {
        const treeArr = this.getList();

        let treeIterator;
        for (treeIterator of treeArr) {
            if (treeIterator.slug === slug) {
                treeIterator.name = name;
                treeIterator.price = price;
                treeIterator.amount = amount;
                this.saveToLocalStorage(treeArr);
                break;
            }
        }
    }
}
