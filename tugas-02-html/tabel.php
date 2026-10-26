<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Data Mahasiswa</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
  </head>
  <body>
    <h1>Data Mahasiswa</h1>
    <?php 
        $data_mahasiswa = array(
            array(
                'nim' => 2559201014,
                'nama' => 'Putri Clara',
                'status' => 'Hadir'
            ),
            array(
                'nim' => 2559201020,
                'nama' => 'Feyra',
                'status' => 'Alfa'
            ),
            array(
                'nim' => 2559201090,
                'nama' => 'Aldi',
                'status' => 'Hadir'
            ),
            array(
                'nim' => 2559201010,
                'nama' => 'Fina',
                'status' => 'Alfa'
            ),
            array(
                'nim' => 2559201030,
                'nama' => 'Ihsan',
                'status' => 'Hadir'
            ),
        );
    ?>
    
    <table class="table">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">NIM</th>
                <th scope="col">Nama</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($data_mahasiswa as $key => $value) { ?>
            <tr>
                <th scope="row"><?php echo ++$key ?></th>
                <td> <?php echo $value['nim']  ?> </td>
                <td><?php echo $value['nama']  ?></td>
                <td><?php echo $value['status']  ?></td>
            </tr>
            <?php } ?>
        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
  </body>
</html>