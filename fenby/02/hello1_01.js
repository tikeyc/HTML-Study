var friends = {

    list: function(obj) {
        for(var prop in obj) {
            console.log(prop);
            alert(prop);
        }
    }

};

friends.Tom = {
    name: "Tom",
    number: "(206) 555-5555",
    address: ['USA','NewYork']
};

friends.Jerry = {
    name: "Jerry",
    number: "(010) 555-5555",
    address: ['中国','北京']
};


var search = function(name) {
    for(var prop in friends) {
        if(friends[prop].name === name) {
            return friends[prop];
        }
    }
};

function showListFriends() {

    friends.list(friends);

    console.log(search("Jerry").number);
    alert(search("Jerry").number);
}



//自定义构造函数
function Person(name,age) {
    this.name = name;
    this.age = age;
}



/////////////

var bob = {
    name: "Bob",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    name: "Mary",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.name + "  \n电话：" + person. phoneNumber + "email：" + person.email);
}

function list() {
  var contactsLength = contacts.length;
  for (var i = 0; i < contactsLength; i++) {
    printPerson(contacts[i]);
  }
}

function search(person) {
    for (var i = 0; i < contacts.length; i++) {
        if (person === contacts[i]) {
            
            if (person.hasOwnProperty('name') && person.hasOwnProperty('email')) {
                // alert("找到对象:" + person.name + "email:" + person.email);
                for (var property in person) {//遍历对象的所有属性及对应的值
                  console.log(property + ": " + person[property]);
                  
                }
                break;
            }

        }
    }
}

//////////////

function Animal (name, age) {
    this.name = name;
    this.age = age;

    //私有属性
    var money = 20000;
    //添加公开方法获取对象的私用属性值
    this.getMoney = function () {
        return money;  
    };

    //私有方法
    var changeMoney = function (newMoney) {
        money = newMoney;
        return money;
    };
    //添加公开方法获取对象的私有方法
    this.getChangeMoneyMethod = function () {
    
        return changeMoney;  
    };

};

function Dog (breed) {
  this.breed = breed;
};
Dog.prototype = new Animal();//这意味着Dog从Animal继承方法和属性

// 这里我们为Dog添加了一个新方法
var buddy = new Dog("golden Retriever");
//一般来说，我们想添加一个方法到类，让类的所有成员都可以使用它，我们使用下面的语法来扩展原型：
Dog.prototype.bark = function() {
  console.log("Woof" + "  " + this.name);

};
buddy.name = "dog";
buddy.bark();

// 这里我们创建了一个snoopy
var snoopy = new Dog("Beagle");
snoopy.name = "snoopy";

snoopy.bark();

console.log(snoopy.getMoney());

//获取私有方法
var method = snoopy.getChangeMoneyMethod();
console.log(method);
method(30000);

console.log(snoopy.getMoney());




/////////////////

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// 创建你自己的对象me，并有20%的折扣
var me = {
    discount: 0.2
};


var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "鸡蛋": this.add(0.98 * quantity); break;
        case "牛奶": this.add(1.23 * quantity); break;
        case "杂志": this.add(4.99 * quantity); break;
        case "巧克力": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // 创建一个新的方法叫applyStaffDiscount 
    applyStaffDiscount: function (me) {
        this.total *= me.discount;
    }
    
};

cashRegister.scan('鸡蛋',1);
cashRegister.scan('牛奶',1);
cashRegister.scan('杂志',3);

console.log('你的总金额是：'+cashRegister.total.toFixed(2));
//调用applyStaffDiscount方法，传入参数me
cashRegister.applyStaffDiscount(me);
//显示总账
console.log('折扣后你的总金额是：'+cashRegister.total.toFixed(2));






