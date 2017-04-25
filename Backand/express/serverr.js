app.put("/animals/:id", function (req, res) {

            for (var i = 0; i < animals.length; i++) {

                if (req.params.id == animals[i].id) {

                    if (req.params.id == animals[i].id) {
                        animals[i].name: req.body.name,
                            animals[i].age: req.body.age,

                            animals[i].isTasty: req.body.isTasty

                        res.status(200).send({
                            message: "Database has been update "
                        });
                    }
                }
                res.status(404).send({
                    message: "No such  animal with id of " + req.params.id
                });

                
                
                
                
                //        app.put("/animals/:id", function(req, res) {
                //
                //for (var i = 0; i < animals.length; i++) {
                //        if (req.params.id == animals[i].id) {
                //            
                //     animals[i].name: req.body.name,
                //      animals[i].age: req.body.age,
                //
                //      animals[i].isTasty: req.body.isTasty
                //            
                //        }
                //            res.status(200).send({
                //                message: "you have update  the animal with id of " + id
                //            })