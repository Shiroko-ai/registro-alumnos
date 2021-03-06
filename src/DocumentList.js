import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
export default function DocumentList (props) {
  return (<div id="page-top">

    {/* <!-- Page Wrapper --> */}
    <div id="wrapper">
      <Sidebar
      name = "Administrador"
      />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Navbar
              user = {props.worker}
              />

            {/* <!-- End of Main Content --> */}
            <div className="container-fluid">

{/* <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    <h1 className="h3 mb-0 text-gray-800">Todos los Documentos</h1>
</div>

{/* <!-- NOTA: Aquí va la tabla de estado de documentos pero se muestra con JS y AJAX--> */}

{/* <!-- Begin Page Content --> */}
<div className="container-fluid">

{/* <!-- DataTales Example --> */}
<div className="card shadow mb-4">
    <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Documentos</h6>
    </div>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Nombre Archivo</th>
                        <th>Fecha</th>
                        <th>Última actualización</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr><th>Nombre</th>
                        <th>Fecha</th>
                        <th>Última actualización</th>
                        <th>Acciones</th>
                    </tr>
                </tfoot>
                <tbody>
                    <tr>
                        <td>Adeudos_20160071</td>
                        <td>10/11/2021</td>
                        <td>12/11/2021</td>
                        <td align="center">
                            <a href="#" className="btn btn-success btn-circle btn-sm">
                                <i className="fab"><img src="img/icon-ojo.png"/></i>
                            </a>
                            <a href="#" className="btn btn-warning btn-circle btn-sm">
                                <i className="fas"><img src="img/icon-editar"/></i>
                            </a>
                            <a href="#" className="btn btn-danger btn-circle btn-sm">
                                <i className="fas fa-trash"></i>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

</div>
{/* <!-- /.container-fluid --> */}

</div>
  {/* <!------------------------ FIN DEL CONTENIDO DE LA PÁGINA ----------------------------------------------------->                    */}

            </div>
            {/* <!-- End of Main Content --> */}

            {/* <!-- Footer --> */}

        </div>
        {/* <!-- End of Content Wrapper --> */}

    </div>
    {/* <!-- End of Page Wrapper --> */}

    {/* <!-- Scroll to Top Button--> */}
    <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
    </a>

    {/* <!-- Logout Modal--> */}
    <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">Selecciona Salir para cerrar la sesión.</div>
                <div className="modal-footer">
                    <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
                    <a className="btn btn-primary" href="login.php">Salir</a>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- Bootstrap core JavaScript--> */}
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    {/* <!-- Core plugin JavaScript--> */}
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    {/* <!-- Custom scripts for all pages--> */}
    <script src="js/sb-admin-2.min.js"></script>

    {/* <!-- Page level plugins --> */}
    <script src="vendor/chart.js/Chart.min.js"></script>

    {/* <!-- Page level custom scripts --> */}
    <script src="js/demo/chart-area-demo.js"></script>
    <script src="js/demo/chart-pie-demo.js"></script>

  </div>)
}
