function sc(floor){
    let str =""
    if (floor<=1)
    {
        return ""
    }
    else if (floor>6)
    {
        for (let i =0; i< floor-1; i++)
        {
            str += "Aa~ "
        }
        return (str+"Pa!")
    }
    else {
        for (let i =0; i< floor-1; i++)
        {
            str += "Aa~ "
        }
        return (str+"Pa! Aa!")

    }


}
