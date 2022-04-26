using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;
using Dimex002DAL.Repositorio;
using Microsoft.SqlServer.Server;
using System.Security.Cryptography;

namespace WebApplication1.Controllers
{
    public class SipreController : Controller
    {
        private readonly ClienteRepositorio clienteRepositorio;
        private readonly Sucursal sucursal;



        public SipreController()
        {
            clienteRepositorio = new ClienteRepositorio();
            sucursal = new Dimex002DAL.Repositorio.Sucursal();
        }
        // GET: Sipre
        public ActionResult preautorizacion_sipre()
        {
            // realizamos una conversion de objetos para poder llenar el combo en la vista
            List<SelectListItem> mySkills = LstSuucursal().Select(x => new SelectListItem() { Value = x.Descripcion, Text = x.Descripcion }).ToList();
            ViewBag.Mensaje = mySkills;
            return View();
        }
        /// <summary>
        /// Con esto llenamos el combo de sucursales
        /// </summary>
        /// <returns></returns>
        public static List<SucursalModel> LstSuucursal()
        {
            Sucursal sucursal;
            List<SucursalModel> ListSupplier = new List<SucursalModel>();

            sucursal = new Sucursal();
            var x = sucursal.ObtenerAll().Select(p => p.txt3).ToList();


            foreach (var item in sucursal.ObtenerAll())
            {

                ListSupplier.Add(new SucursalModel()
                {
                    sucursalId = item.ID,
                    Descripcion = item.txt3

                });

            }

            return ListSupplier;
        }

        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        //Le agregamos otro parametro para poder obtener la sucursal
        public ActionResult Preautorizacion_sipre(FormsModel model, string Sucursal)
        {
            try
            {

                if (!ModelState.IsValid)
                {
                    //se realiza un llamado a crear respuesta
                    // si se realiza un guardado en la base de datos 
                    //respuesta  cambia a TRUE
                    //De lo contrario es FALSE
                    //Hasta aqui ya realizamos el Insert a la tabla imss_preautorizacion
                    var respuesta = clienteRepositorio.Crear(new Dimex002DAL.imss_preautorizacion
                    {
                        created = DateTime.Now,
                        modified = DateTime.Now,
                        type = "REGISTRO",
                        txt4 = Sucursal,
                        txt5 = model.Solicitud,
                        txt8 = model.nombre,
                        txt9 = model.apaterno,
                        txt10 = model.amaterno,
                        txt11 = model.curp,
                        txt12 = model.clabe,
                        txt13 = model.numsegurosocial,
                        txt14 = model.strPlazo,
                        txt15 = model.capitalsolicitado,
                        txt16 = model.strTasa,
                        txt17 = model.strCat,
                        txt18 = model.valorpago,
                        txt19 = model.montototalpagar,
                        txt20 = model.strGrupo

                    });
                    // Info.

                }
            }
            catch (Exception e)
            {
            }
            // If we got this far, something failed, redisplay form
            return View(model);
        }

    }
}