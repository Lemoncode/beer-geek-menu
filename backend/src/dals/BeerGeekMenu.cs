using System.Diagnostics.Metrics;
using System.Drawing;
using System.Net;
using System.Numerics;
using System.Xml.Linq;

namespace BeerGeekMenu
{
    public class Beer
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Description { get; set; }
        public String Colour { get; set; }
        public String Style { get; set; }
        public String Country { get; set; }
        public double Alcohol { get; set; }
        public String Allergens { get; set; }
        public double Volume { get; set; }
        public String PhotoURL { get; set; }

        public Beer() {
            Id = 0;
            Name = "";
            Description = "";
            Colour = "";
            Style = "";
            Country = "";
            Alcohol = 0;
            Allergens = "";
            Volume = 0;
            PhotoURL = "";
        }
    }

    public class Restaurant
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Address { get; set; }
        public String City { get; set; }
        public String Phone { get; set; }

        public Restaurant()
        {
            Id = 0;
            Name = "";
            Address = "";
            City = "";
            Phone = "";
        }
    }

    public class RestaurantBeersMenu
    {
        public int Id { get; set; }
        public int Beer { get; set; }
        public int Restaurant { get; set; }
        public bool HasStock { get; set; }
        public double Price { get; set; }
        
        public RestaurantBeersMenu()
        {
            Id = 0;
            Beer = 0;
            Restaurant = 0;
            HasStock = false;
            Price = 0;
        }
    }
}
