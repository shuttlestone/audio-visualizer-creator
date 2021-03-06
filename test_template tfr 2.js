//MIT License - Copyright (c) 2020 Picorims

//TEMPLATE GEOPLEX

function Template() {

    
    new Background(
        {
            id: "background",
            layer: 0,
            background: "radial-gradient(circle, rgba(255,248,223,1) 0%, rgba(242,233,196,1) 35%, rgba(235,204,109,1) 100%)",
            size: "100%",
        }
    );



    new Visualizer(
        {
            id: "hills1",
            layer: 40,
            x: 0,
            y: 0,
            width: 1280,
            height: 30,
            rotation: 180,
            radius: 0,
            type: "straight-wave",
            points_count: 300,
            analyser_range: [0, 650],
            color: "#a37300",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );

    new Visualizer(
        {
            id: "hills2",
            layer: 35,
            x: 0,
            y: 0,
            width: 1280,
            height: 60,
            rotation: 180,
            radius: 0,
            type: "straight-wave",
            points_count: 300,
            analyser_range: [0, 650],
            color: "#d79800",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );

    new Visualizer(
        {
            id: "hills3",
            layer: 30,
            x: 0,
            y: 0,
            width: 1280,
            height: 100,
            rotation: 180,
            radius: 0,
            type: "straight-wave",
            points_count: 300,
            analyser_range: [0, 650],
            color: "#ffb400",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );

    new Visualizer(
        {
            id: "hills4",
            layer: 25,
            x: 0,
            y: 0,
            width: 1280,
            height: 150,
            rotation: 180,
            radius: 0,
            type: "straight-wave",
            points_count: 100,
            analyser_range: [0, 650],
            color: "#ffc12c",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );












    new Visualizer(
        {
            id: "hills1-2",
            layer: 40,
            x: 0,
            y: 690,
            width: 1280,
            height: 30,
            rotation: 0,
            radius: 0,
            type: "straight-wave",
            points_count: 300,
            analyser_range: [0, 650],
            color: "#a37300",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );

    new Visualizer(
        {
            id: "hills2-2",
            layer: 35,
            x: 0,
            y: 660,
            width: 1280,
            height: 60,
            rotation: 0,
            radius: 0,
            type: "straight-wave",
            points_count: 300,
            analyser_range: [0, 650],
            color: "#d79800",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );

    new Visualizer(
        {
            id: "hills3-2",
            layer: 30,
            x: 0,
            y: 620,
            width: 1280,
            height: 100,
            rotation: 0,
            radius: 0,
            type: "straight-wave",
            points_count: 300,
            analyser_range: [0, 650],
            color: "#ffb400",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );

    new Visualizer(
        {
            id: "hills4-2",
            layer: 25,
            x: 0,
            y: 570,
            width: 1280,
            height: 150,
            rotation: 0,
            radius: 0,
            type: "straight-wave",
            points_count: 100,
            analyser_range: [0, 650],
            color: "#ffc12c",
            bar_thickness: 3,
            border_radius: "3px",
            box_shadow: "0px 0px 2px rgba(20,20,20,0.5)",
        }
    );















    new ParticleFlow(
        {
            id: "particle_flow",
            layer: 5,
            x: 0,
            y: 0,
            width: 1280,
            height: 720,
            particle_radius_range: [1, 2],
            type: "radial",
            center: {
                x: 640,
                y: 360,
            },
            particle_direction: 0,
            max_spawn_probability: 0.4,
            color: "#ffffff",
        }
    );



    new Timer(
        {
            id: "timer",
            layer: 50,
            x: 100,
            y: 360-10,
            width: 1080,
            height: 20,
            rotation: 0,
            type: "point",
            color: "#ffc12c",
            border_to_bar_space: 0,
            border_thickness: 5,
            border_radius: "10px",
            box_shadow: "",
        }
    );

    new Timer(
        {
            id: "timer",
            layer: 40,
            x: 100+3,
            y: 360-10+3,
            width: 1074,
            height: 20,
            rotation: 0,
            type: "point",
            color: "#ffb400",
            border_to_bar_space: 0,
            border_thickness: 5,
            border_radius: "10px",
            box_shadow: "",
        }
    );

    new Timer(
        {
            id: "timer",
            layer: 30,
            x: 100+6,
            y: 360-10+6,
            width: 1068,
            height: 20,
            rotation: 0,
            type: "point",
            color: "#d79800",
            border_to_bar_space: 0,
            border_thickness: 5,
            border_radius: "10px",
            box_shadow: "",
        }
    );

    new Timer(
        {
            id: "timer",
            layer: 20,
            x: 100+9,
            y: 360-10+9,
            width: 1062,
            height: 20,
            rotation: 0,
            type: "point",
            color: "#a37300",
            border_to_bar_space: 0,
            border_thickness: 5,
            border_radius: "10px",
            box_shadow: "",
        }
    );







    new Image(
        {
            id: "horizontal-container",
            layer: 10,
            x: 0,
            y: 310,
            width: 1280,
            height: 100,
            rotation: 0,
            background: "rgba( 255, 211, 95 ,0.3)",
            size: "",
            border_radius: "",
            box_shadow: "",
        }
    );





    new Text(
        {
            id: "title",
            layer: 100,
            x: 0,
            y: 230,
            width: 1280,
            height: 100,
            rotation: 0,
            type: "any",
            text: "THEFATRAT & ANJULIE",
            font_size: 60,
            color: "#ffd462",
            text_shadow: "0px 2px 0px #ffc12c, 0px 4px 0px #ffb400, 0px 6px 0px #d79800, 0px 8px 0px #a37300",
        }
    );

    new Text(
        {
            id: "subtitle",
            layer: 100,
            x: 0,
            y: 400,
            width: 1280,
            height: 100,
            rotation: 0,
            type: "any",
            text: "CLOSE TO THE SUN",
            font_size: 90,
            color: "#ffd462",
            text_shadow: "0px 2px 0px #ffc12c, 0px 4px 0px #ffb400, 0px 6px 0px #d79800, 0px 8px 0px #a37300",
        }
    );

}