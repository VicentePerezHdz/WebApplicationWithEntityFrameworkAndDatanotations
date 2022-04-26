using Dimex002DAL.Repositorio;
using Microsoft.Ajax.Utilities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication1.Models
{
    public class SucursalModel
    {

        public int sucursalId { get; set; }
        public string Descripcion { get; set; }



    }
    public class FormsModel
    {


        [Required(ErrorMessage = "Debe seleccionar Solicitud requerido para continuar")]
        [Display(Name = "Solicitud")]
        public string Solicitud { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "cuenta para continuar", MinimumLength = 6)]
        [Display(Name = "cuenta")]
        public string cuenta { get; set; }

        [Required]
        [StringLength(18, ErrorMessage = "El nombre es requerido para continuar", MinimumLength = 18)]
        [Display(Name = "nombre")]
        public string nombre { get; set; }


        [Required]
        [Display(Name = "Apellido Paterno")]
        [StringLength(100, ErrorMessage = "El Apellido paterno requerido para continuar.", MinimumLength = 50)]
        public string apaterno { get; set; }

        [Required]
        [StringLength(100, ErrorMessage = "El Apellido Materno requerido para continuar.", MinimumLength = 50)]
        [Display(Name = "Apellido Materno")]
        public string amaterno { get; set; }

        [Required]
        [StringLength(18, ErrorMessage = "CURP es  requerido para continuar", MinimumLength = 18)]
        [Display(Name = "curp")]
        public string curp { get; set; }

        [Required]
        [StringLength(18, ErrorMessage = "La  CLABE es requerido para continuar", MinimumLength = 18)]
        [Display(Name = "Clabe")]
        public string clabe { get; set; }

        [Required]
        [StringLength(11, ErrorMessage = "El numero de seguro social es requerido para continuar", MinimumLength = 11)]
        [Display(Name = "Numero Seguro social")]
        public string numsegurosocial { get; set; }

        [Required]
        [Display(Name = "capital solicitado")]
        public string capitalsolicitado { get; set; }


        [Required]
        [Display(Name = "valor pago")]
        public string valorpago { get; set; }

        [Required]
        [Display(Name = "monto total pagar")]
        public string montototalpagar { get; set; }


        [Required(ErrorMessage = "Debe seleccionar Sucursal requerido para continuar")]
        [Display(Name = "Sucursal")]
        public string strSucursal { get; set; }

        [Required(ErrorMessage = "Debe seleccionar el Tipo de Credito  requerido para continuar")]
        [Display(Name = "TipoCredito")]
        public string strTipoCredito { get; set; }

        [Required(ErrorMessage = "Debe seleccionar el credito requerido para continuar")]
        [Display(Name = "plazo")]

        public string strPlazo { get; set; }

        [Required(ErrorMessage = "Debe seleccionar tasa requerido para continuar")]
        [Display(Name = "tasa")]
        public string strTasa { get; set; }


        [Required(ErrorMessage = "Debe seleccionar cat  requerido para continuar")]
        [Display(Name = "cat")]
        public string strCat { get; set; }

        [Required(ErrorMessage = "Debe seleccionar el grupo requerido para continuar")]
        [Display(Name = "grupo")]
        public string strGrupo { get; set; }


        [Required(ErrorMessage = "Por favor adjunte los documentos INE.")]
        public HttpPostedFileBase PostedFile { get; set; }

        [Required(ErrorMessage = "Por favor adjunte los documentos Carta de Instrucción.")]
        public HttpPostedFileBase PostedFile2 { get; set; }


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
    }
}