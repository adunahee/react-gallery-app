-- create database named "react-gallery" using postico

CREATE TABLE "photos" (
    id SERIAL PRIMARY KEY,
    "path" text not null,
    "description" varchar(240),
    "year" varchar(4) not null,
    "likes" INT default 0);

INSERT INTO "photos" ("path", "description", "year")
    VALUES ('images/belay_boy_300.jpg', 
            'Weekend climbing adventure in college.', 
            2011),
           ('images/eustis_park_300.jpg', 
           'Springbreak spent climbing in Eustis Park, CO.', 
           2012),
           ('images/family_christmas_300.jpg',
           'Visiting family in Arizona during Christmas.',
           2019),
           ('images/ice_climbing_300.jpg',
           'Weekend ice climbing trip at quarry in Sandstone, MN.',
           2012),
           ('images/kilt_show_300.jpg',
           'Modeling personally made kilt and renfest.',
           2015),
           ('images/little_betty_300.jpg',
           'Ride home after adopting our new kitten Betty.',
           2012),
           ('images/peanuts_halloween_300.jpg',
           'Friend group with Peanuts themed halloween costumes.',
            2011),
           ('images/punished_at_dublinia_300.jpg', 
           'Vacationing in Ireland at the Dublinia museum.',
           2015),
           ('images/ragbrai_finale_300.jpg',
           'Finish line celebration after completing the Great Bike Ride Across Iowa', 
           2019),
           ('images/white_kitty_is_boss_300.jpg', 
           'Pet cat Lucy gesturing to human to speak no more during snuggle time.',
           2013);

