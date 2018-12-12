const app = new Vue({
el:'#app',
name:'CRUD operations',
data:{
    newUser:{},
    users:[
        {
            id:1,
            name:'Murad',
            role:'admin', 
        },
        {
            id:2,
            name:'Nail',
            role:'user', 
        },
        {
            id:3,
            name:'Orxan',
            role:'user', 
        },
        {
            id:4,
            name:'Bahadur',
            role:'user', 
        }
    ]
},
methods:{
    yeniIstifadeci(){
        this.newUser = {role:''};
        $('#istifadeciModal').modal('show');
    },
    istifadeciniYaddaSaxla(){
        if(this.newUser.name !==undefined && this.newUser.role !== '')
    {      
        if(this.newUser.id>0)
        {
            let istifadeci = this.users.find(x=>x.id ==this.newUser.id);
            istifadeci =this.newUser;

        }
        else
{        this.users.push({
            id: this.users.length+1,
            name: this.newUser.name,
            role: this.newUser.role
        });
}
        this.newUser = {};
        $('#istifadeciModal').modal('hide'); 
    }
           },
    //Indeks nomresine gore silme emeliyyati
    // remove(index){
    //     this.users.splice(index,1);
    // }
    remove(id){
        const istifadeci = this.users.find(x=>x.id ===id);
        if(istifadeci !==null)
        {
            this.users = this.users.filter(x=>x.id !==istifadeci.id);
        }
    },
    update(index)
    {
        this.newUser = this.users[index];
        $('#istifadeciModal').modal('show');

    }
}

});