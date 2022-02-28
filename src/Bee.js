var Bee = function() {
  //We dont want to just invoke one specific instance of Grub(new Grub()), because if we cahnge anything
  //in Grub, it will not carry over to Bee. It's just ONE very specific instance if you do new Grub().
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

//you dont want it set to Grub.prototype, because that's just a pointer, and changing
//bee's prototypes will change the pointers prototypes as well (In this case Grub!!);
Bee.prototype = Object.create(Grub.prototype);
//The prototype constructor should just be the constructor Bee itself!
Bee.prototype.constructor = Bee;
