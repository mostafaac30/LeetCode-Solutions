class ParkingSystem
{
public:
    int b, m, s;
    ParkingSystem(int big, int medium, int small)
    {
        b = big, m = medium, s = small;
    }
    bool addCar(int carType)
    {
        if (carType == 1)
        {
            // big
            b--;
            return (bool)(b >= 0);
        }
        else if (carType == 2)
        {
            m--;
            return (bool)(m >= 0);
        }
        else
        {
            s--;
            return (bool)(s >= 0);
        }
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem* obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj->addCar(carType);
 */